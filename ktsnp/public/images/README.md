# How to Add Project Images

## Issue
Your project images are not showing because the image paths in `constants.ts` don't match your actual image files.

## Solution

### Step 1: Place Your Project Images

Put your project images in one of these locations:
```
ktsnp/public/images/projects/project1.jpg
ktsnp/public/images/projects/project2.jpg
ktsnp/public/images/projects/project3.jpg
```

OR directly in:
```
ktsnp/public/images/project1.jpg
ktsnp/public/images/project2.jpg
ktsnp/public/images/project3.jpg
```

### Step 2: Update Image Paths in constants.ts

Edit `ktsnp/lib/constants.ts` and update the `image` field for each project:

**Example - If images are in `/public/images/projects/`:**
```typescript
export const PROJECTS = [
  {
    title: "E-Commerce Platform",
    // ... other fields ...
    image: "/images/projects/ecommerce.jpg",  // ← Change this
    // ... rest of project ...
  },
  {
    title: "Task Management System",
    // ... other fields ...
    image: "/images/projects/taskmanager.png",  // ← Change this
    // ... rest of project ...
  },
  {
    title: "Portfolio Generator",
    // ... other fields ...
    image: "/images/projects/portfolio.jpg",  // ← Change this
    // ... rest of project ...
  },
];
```

**Example - If images are directly in `/public/images/`:**
```typescript
export const PROJECTS = [
  {
    title: "E-Commerce Platform",
    image: "/images/111.jpg",  // ← Use your actual filename
  },
  {
    title: "Task Management System",
    image: "/images/Screenshot2022-05-09124203.jpg",  // ← Use your actual filename
  },
  {
    title: "Portfolio Generator",
    image: "/images/bg.jpg",  // ← Use your actual filename
  },
];
```

## Important Notes

1. **Path Format**:
   - Always start with `/images/` (no `/public/` in the path)
   - Use the exact filename including extension (.jpg, .png, .jpeg)
   - File names are case-sensitive

2. **Image Recommendations**:
   - Use `.jpg` or `.png` format
   - Recommended size: 1200x630px or 1920x1080px
   - Optimize images before uploading (use tools like TinyPNG)
   - Keep file size under 500KB for fast loading

3. **Current Image Files Available**:
   Your `/public/images/` folder currently contains:
   - 111.jpg
   - Screenshot2022-05-09124203.jpg
   - bg.jpg
   - formals.jpeg
   - And many others...

## Quick Fix Example

If you want to use existing images, edit `ktsnp/lib/constants.ts` line 202, 220, and 238:

```typescript
// Change from:
image: "/images/project-placeholder.jpg",

// To (using your existing images):
image: "/images/111.jpg",  // or any other image filename you have
```

## Testing

After updating the paths:
```bash
cd ktsnp
npm run dev
# Visit http://localhost:3000 and scroll to Projects section
```

Your images should now appear!

## Troubleshooting

**Image still not showing?**
1. Check the browser console (F12) for errors
2. Verify the image file exists in `/public/images/`
3. Check that the filename exactly matches (including case)
4. Try using a different image format (.jpg vs .png)
5. Make sure the image path doesn't include `/public/` in constants.ts

**Example of WRONG vs RIGHT paths:**
```typescript
// ❌ WRONG
image: "/public/images/project.jpg"
image: "public/images/project.jpg"
image: "images/project.jpg"
image: "../public/images/project.jpg"

// ✓ RIGHT
image: "/images/project.jpg"
image: "/images/projects/project.jpg"
```
