import { useAnimations, useGLTF, useScroll } from "@react-three/drei"
import { useEffect, useRef } from "react"
import { AnimationAction, Group, LoopOnce, LoopRepeat } from "three"


useGLTF.preload("/galaxy.glb")

export default function Model() {
    const group = useRef<Group>(null)
    const { nodes, materials, animations, scene } = useGLTF(
        "/galaxy.glb"
    )
    const { actions } = useAnimations(animations, scene)

    useEffect(() => {
        if (actions && actions["Object_0"]) {
            actions["Object_0"]
                .setLoop(LoopRepeat, Infinity)
                .setEffectiveTimeScale(1)
                .setEffectiveWeight(1)
                .play()
        }
    }, [actions])

    return (
        <group
            ref={group}
            scale={0.2}
            rotation={[0, 0, 60]}
        >
            <primitive
                object={scene}
                castShadow
                receiveShadow
            />
        </group>
    )
}

