declare global {
  interface Window {
    scrollAnimationExecuted?: boolean;
    animationExecuted?: boolean;
  }
}

import { useAnimations, useGLTF } from "@react-three/drei"
import { useEffect, useRef } from "react"
import { AnimationAction, Group, LoopOnce, LoopRepeat } from "three"


useGLTF.preload("/robot.glb")

export default function Model({ isMobile }: { isMobile: boolean }) {
  const group = useRef<Group>(null)
  const {  animations, scene } = useGLTF(
    "/robot.glb"
  )

  const { actions } = useAnimations(animations, scene)

  useEffect(() => {
    initializeAnimation()
  }, []);

  



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
        console.log("Animation finished:", action);

        // Start fading out current animation
        // action.fadeOut(0.3);
        callback();
        // Wait a brief moment before starting next animation
        setTimeout(() => {
          // Remove listener before starting next animation
          mixer.removeEventListener('finished', onFinished);
          // Execute callback for next animation

        }, 200); // Adjust timing as needed
      }
    };

    // Add listener before playing
    mixer.addEventListener('finished', onFinished);

    // Start the animation with fade in
    action.play();
  };

  return (
    <group position={isMobile ? [ 0.5, -6, -1]:[10, -1, -1]}>
      <group
        ref={group}
        scale={0.018}
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
