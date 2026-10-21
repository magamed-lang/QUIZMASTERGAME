const fs = require('fs'), path = require('path');
const src = path.join(__dirname, '..', 'node_modules', 'pdfjs-dist', 'build');
const dst = path.join(__dirname, '..', 'www');
['pdf.min.js', 'pdf.worker.min.js'].forEach(f => {
  fs.copyFileSync(path.join(src, f), path.join(dst, f));
  console.log('copied', f);
});
