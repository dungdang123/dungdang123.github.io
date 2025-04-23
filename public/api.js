const images = [
    'dnd.png',
    'idle.png',
    'offline.png',
    'online.png'
];

const App = () => {
    const [currentImage, setCurrentImage] = React.useState('');
    const [previousImages, setPreviousImages] = React.useState([]);

   

    function getRandomImage() {
        if(previousImages.length === images.length) {
            setPreviousImages([]);
        }

        const availableImages = images.filter(image => !previousImages.includes(image));
        const targetImages = availableImages.length > 0 ? availableImages : images;
        const randomIndex = Math.floor(Math.random() * targetImages.length);
        const selectedImage = targetImages[randomIndex];
        setPreviousImages(prev => [...prev, selectedImage]);
        return selectedImage;
    }

    const handleClick = () => {
        const newImage = getRandomImage();
        setCurrentImage(newImage);
    };

    React.useEffect(() => {
        handleClick();
    }, []); 
    
    return (
        <>
            <img 
                alt="Current Status" 
                aria-hidden="true" 
                id="status" 
                src={`./public/status/${currentImage}`} 
                onClick={handleClick} 
                style={{ cursor: 'pointer' }} 
            />
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));