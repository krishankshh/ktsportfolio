# 3D Avatar Models

Place your 3D model files in this directory.

## Required Files

1. **avatar.glb** - Your 3D model in GLB format
2. **animation.fbx** - Your animation in FBX format

## File Naming

The default file names are:
- `/models/avatar.glb`
- `/models/animation.fbx`

If you want to use different file names, update these constants in `/components/3d/Avatar3D.tsx`:

```typescript
const MODEL_PATH = "/models/your-model-name.glb";
const ANIMATION_PATH = "/models/your-animation-name.fbx";
```

## Adjusting Model Settings

After adding your files, you may need to adjust these settings in `/components/3d/Avatar3D.tsx`:

### Scale
Change the `scale` value to make your model bigger or smaller:
```typescript
<primitive
  object={scene}
  scale={2}  // Increase or decrease this number
  position={[0, -1, 0]}
/>
```

### Position
Adjust the position values to center your model:
```typescript
position={[0, -1, 0]}  // [x, y, z] coordinates
// y: -1 means 1 unit down (adjust if model is too high/low)
```

### Animation Speed
If you want to slow down or speed up the animation, modify the mixer timeScale in `Avatar3D.tsx`:
```typescript
useEffect(() => {
  if (mixer) {
    mixer.timeScale = 1.0; // 0.5 = half speed, 2.0 = double speed
  }
}, [mixer]);
```

## Troubleshooting

- **Model doesn't appear**: Check the browser console for errors. Make sure file names match exactly.
- **Model is too big/small**: Adjust the `scale` prop
- **Model is upside down or rotated wrong**: Add rotation to the primitive:
  ```typescript
  <primitive
    object={scene}
    scale={2}
    position={[0, -1, 0]}
    rotation={[0, Math.PI, 0]}  // Rotate 180 degrees on Y axis
  />
  ```
- **Animation doesn't play**: Check that the FBX file contains animations and they're compatible with your model's skeleton

## Removing Floating Particles

If you don't want the floating particles around your avatar, remove or comment out this section in `Avatar3D.tsx`:

```typescript
{/* Optional: Floating particles around avatar */}
{Array.from({ length: 8 }).map((_, i) => (
  <FloatingParticle key={i} index={i} />
))}
```
