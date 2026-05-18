const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images');

const imagesToOptimize = [
  { input: 'call.png', output: 'call.webp', quality: 80 },
  { input: 'code.png', output: 'code.webp', quality: 80 },
  { input: 'rocket.png', output: 'rocket.webp', quality: 80 },
  { input: 'spark.png', output: 'spark.webp', quality: 80 },
  { input: 'zap.png', output: 'zap.webp', quality: 80 },
];

async function optimizeImages() {
  console.log('Starting image optimization...\n');

  for (const image of imagesToOptimize) {
    const inputPath = path.join(imagesDir, image.input);
    const outputPath = path.join(outputDir, image.output);

    try {
      if (!fs.existsSync(inputPath)) {
        console.log(`⚠️  Skipping ${image.input} - file not found`);
        continue;
      }

      const inputStats = fs.statSync(inputPath);
      const inputSizeKB = (inputStats.size / 1024).toFixed(2);

      await sharp(inputPath)
        .webp({ quality: image.quality })
        .toFile(outputPath);

      const outputStats = fs.statSync(outputPath);
      const outputSizeKB = (outputStats.size / 1024).toFixed(2);
      const reduction = (((inputStats.size - outputStats.size) / inputStats.size) * 100).toFixed(1);

      console.log(`✅ ${image.input} → ${image.output}`);
      console.log(`   ${inputSizeKB} KB → ${outputSizeKB} KB (${reduction}% reduction)\n`);
    } catch (error) {
      console.error(`❌ Error optimizing ${image.input}:`, error.message);
    }
  }

  console.log('Image optimization complete!');
}

optimizeImages();
