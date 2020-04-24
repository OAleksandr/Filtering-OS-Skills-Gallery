// Enter your JavaScript for the solution here...
window.addEventListener("load", function(evt)
{
    const filterInput = document.querySelector('#filter');
    const resetButton = document.querySelector('.reset');
    const imagesArray = Array.from(document.querySelectorAll('.thumb-display'));
    
    filterInput.addEventListener('input', function(e)
    {
        e.preventDefault();

        if(filterInput.value != "")
        {
            resetButton.classList.remove('hidden');
        }
        else
        {
            resetButton.classList.add('hidden');
        }

        imagesArray.forEach(function(item)
        {
            const inputValue = filterInput.value;
            let tags = item.querySelector('.tags');

            searchImageArray(item, tags.innerHTML, inputValue)
        });

    });// End filetrInput Listener

    function searchImageArray(item, tags, inputValue)
    {
        if(tags.includes("#" + inputValue.trim()))
        {
            item.classList.remove('hidden');
        }
        else
        {
            item.classList.add('hidden');
        }
        
    }// End searchImageArray

    resetButton.addEventListener('click', function(e)
    {   
        filterInput.value = "";

        imagesArray.forEach(function(item)
        {
            item.classList.remove('hidden');
        })

        if(filterInput.value === "")
        {
            resetButton.classList.add('hidden');
        }
        
    });// End Reset Button


});// End window Listener


