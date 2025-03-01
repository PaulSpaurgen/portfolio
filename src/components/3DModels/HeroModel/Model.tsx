declare global {
  interface Window {
    scrollAnimationExecuted?: boolean;
    animationExecuted?: boolean;
  }
}

import { useAnimations, useGLTF } from "@react-three/drei"
import { useEffect, useRef } from "react"
import { AnimationAction, Group, LoopOnce, LoopRepeat } from "three"
import { useAppContext } from "@/context/AppContext"

useGLTF.preload("/robot.glb")

export default function Model({ isMobile }: { isMobile: boolean }) {
  const group = useRef<Group>(null)
  const {  animations, scene } = useGLTF(
    "/robot.glb"
  )
  const { setIsModelLoaded } = useAppContext()

  const { actions } = useAnimations(animations, scene)

  useEffect(() => {
    if (scene) {
      console.log("model loaded")
      setIsModelLoaded(true)
      initializeAnimation()
    }
  }, [scene]);

  



  const initializeAnimation = () => {
    if (actions["Ball_To_Stand"] && actions["Idle_Look_Side"]) {

      const ballToStandAction = actions["Ball_To_Stand"].fadeIn(0.5)
      remixAnimations(ballToStandAction, () => {
        actions["Idle_Look_Side"]?.reset()
          .fadeIn(0.5)
          .setLoop(LoopRepeat, Infinity)
          .setEffectiveTimeScale(1)
          .setEffectiveWeight(1)
          .play()
      })
    } else {
      console.log("no animation")
    }
  }

  const remixAnimations = (action: AnimationAction | undefined | null, callback: () => void) => {
    if (!action) return;

    // console.log("Starting animation:", action);

    // Reset and prepare the action
    action
      .reset()
      .setLoop(LoopOnce, 1)
      .setEffectiveTimeScale(1)
      .setEffectiveWeight(1);

    // Ensure smooth transition
    const mixer = action.getMixer();

    const onFinished = (e: any) => {
      if (e.action === action) {
        callback();
        setTimeout(() => {
          mixer.removeEventListener('finished', onFinished);

        }, 200);
      }
    };

    // Add listener before playing
    mixer.addEventListener('finished', onFinished);

    // Start the animation with fade in
    action.play();
  };

  return (
    <group position={[0,-2,0]} ref={group}>
      <group
        scale={ 0.015}
        rotation={[60, 0, 0]}
      >
        <primitive 
          object={scene} 
          castShadow
          receiveShadow
        />
      </group>
    </group>
  )
}
