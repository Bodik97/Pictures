const pictureSize = (imgSelector) => {
    console.log('func start');
    
    const blocks = document.querySelectorAll(imgSelector);

    function showImg (block) {
        const img = block.querySelector('img');
        //something png => something-1.png
        img.src = img.src.slice(0, -4) + '-1.png';
        block.querySelectorAll('p:not(.sisez-hit)').forEach(p => {
            p.style.display = 'none';
        });
    }

    function hideImg (block) {
        const img = block.querySelector('img');
        //something-1.png => ssomething png
        img.src = img.src.slice(0, -6) + '.png';
        block.querySelectorAll('p:not(.sisez-hit)').forEach(p => {
            p.style.display = 'block';
        });
    }
        console.log('block');

    blocks.forEach(block => {
        
        block.addEventListener('mouseover', () => {
            console.log('mouseover');
            
            showImg(block);
        });
        block.addEventListener('mouseout', () => {
            console.log('mouseout ');

            hideImg(block);
        });
    }); 
};

export default pictureSize;