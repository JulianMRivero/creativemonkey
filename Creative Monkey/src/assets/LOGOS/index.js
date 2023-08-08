const images = import.meta.globEager("./*.png"); // Cambia la extensión según tus imágenes
const imagePaths = Object.keys(images).map((key) => {
    const path = images[key].default;
    const imageName = path.substring(path.lastIndexOf("/") + 1, path.lastIndexOf("."));
    return { path, imageName };
  });
export default imagePaths;