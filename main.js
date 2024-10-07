const user = document.querySelector('.user')
const beauty = document.querySelector('.b')
const furniture = document.querySelector('.f')
const grociries = document.querySelector('.g')

async function info(){
    try {
        let link = await fetch('https://dummyjson.com/products')
        let data =  await link.json()
        // console.log(data.products);
        data.products.forEach((el) => {
            let item = document.createElement('div')
            item.classList.add('item')
            
            let title = document.createElement('h2')
            let description = document.createElement('button')
            let price = document.createElement('h3')
            let img = document.createElement('img')
            
            description.textContent = 'Подробнее...'
            description.addEventListener('click',() =>{
                description.textContent = el.description
            })
            

            title.textContent = el.title
            price.textContent = `Price: ${el.price} $`
            price.style.fontFamily = 'RR'
            img.innerHTML = el.thumbnail
            img.src = el.thumbnail

            user.append(item)
            item.append(img)
            item.append(title)
            item.append(description)
            item.append(price)


        });
    } catch (error) {
        console.error('Ошибка при получения данных');
    }
}

beauty.addEventListener('click', () => {
    window.scrollTo({
        top: 160,
        behavior: 'smooth' // Optional: adds smooth scrolling effect
    });
});

furniture.addEventListener('click', () => {
    window.scrollTo({
        top: 1670,
        behavior: 'smooth' // Optional: adds smooth scrolling effect
    });
});

grociries.addEventListener('click', () => {
    window.scrollTo({
        top: 2710,
        behavior: 'smooth' // Optional: adds smooth scrolling effect
    });
});

window.addEventListener('DOMContentLoaded', () => info())