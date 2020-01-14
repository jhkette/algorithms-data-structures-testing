
document.querySelector('form').addEventListener('submit',(e) => {
    e.preventDefault();

    const {value} = document.querySelector('input');
    const regex = new RegExp(/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/);
    if (regex.test(value)){
        document.querySelector('h2').innerHTML = 'Looks good';
    }else{
        document.querySelector('h2').innerHTML = 'Not good';

    }
})

