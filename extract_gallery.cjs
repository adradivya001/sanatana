const sharp = require('sharp');
const fs = require('fs');

async function processCollage() {
  const input = 'public/sanatana_gallery_collage.jpg';
  const meta = await sharp(input).metadata();
  console.log('Original dimensions:', meta.width, meta.height);

  const cols = 4;
  const rows = 3;
  const w = Math.floor(meta.width / cols);
  const h = Math.floor(meta.height / rows);

  const titles = [
    'Outdoor Toy Train Play & Physical Development',
    'Sensory Number Activity & Fine Motor Skills',
    'Creative Bead & Montessori Math Counting',
    'Independence Day Stage Performance & Patriotism',
    'Fancy Dress Independence Day Celebration',
    'Festive Cultural Drama & Traditional Costumes',
    'Little Chefs Healthy Fruit Salad Workshop',
    'Annual Day Angels & Santa Festivity',
    'Republic Day Tricolour Flag March & Songs',
    'Early Literacy Classroom Facilitator Guidance',
    'Outdoor Football & Team Spirit Sports Drill',
    'Bright Yellow Day Color Recognition Festival'
  ];

  let index = 1;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const left = c * w;
      const top = r * h;
      const outPath = `public/gallery_item_${index}.jpg`;
      await sharp(input)
        .extract({ left, top, width: w, height: h })
        .jpeg({ quality: 92 })
        .toFile(outPath);
      console.log('Extracted ' + outPath);
      index++;
    }
  }
}
processCollage().catch(err => {
  console.error(err);
  process.exit(1);
});
