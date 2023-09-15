const ImageGalleryItem = ({
  image,
  alt,
  selectImage,
}: {
  image: string;
  alt: string;
  selectImage: (url: string, tags: string) => void;
}) => {
  return (
    <li className='rounded-[2px] shadow' onClick={() => selectImage(image, alt)}>
      <img
        className='transition-{transform 250ms cubic-bezier(0.4, 0, 0.2, 1)} hover:scale-30 h-[260px] w-[100%] object-cover hover:cursor-zoom-in'
        src={image}
        alt={alt}
      />
    </li>
  );
};

export default ImageGalleryItem;
