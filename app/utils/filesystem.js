import fs from 'fs';

// List all files in a directory in Node.js recursively in a synchronous fashion
export const walkSync = (dir, filelist) => {
  var files = fs.readdirSync(dir);
  var filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + file).isDirectory()) {
      filelist = walkSync(dir + file + '/', filelist);
    }
    else {
      filelist.push(file);
    }
  });
  return filelist;
};

