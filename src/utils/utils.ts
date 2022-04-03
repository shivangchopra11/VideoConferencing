export const saveFile = (filename: string, blob: Blob) => {
  const elem = window.document.createElement('a');
  elem.style.display = 'none';
  elem.href = window.URL.createObjectURL(blob);
  elem.download = filename;
  document.body.appendChild(elem);
  elem.click();
  document.body.removeChild(elem);
};
