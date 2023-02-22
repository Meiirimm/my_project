let modal = document.querySelector('#modal-window');
let image = modal.querySelector('img')

let s = []

function OpenModal(element){
    modal.style.display = 'flex'
    image.src =  element.querySelector('img').src
    // console.log(image.src);
}

function closeModal(){
    modal.style.display = 'none'
}



let src = [
    'file:///C:/Users/User/Desktop/fullstakcjs/my_project/img/portfolio1.jpg', 
    'file:///C:/Users/User/Desktop/fullstakcjs/my_project/img/portfolio2.jpg', 
    'file:///C:/Users/User/Desktop/fullstakcjs/my_project/img/portfolio3.jpg', 
    'file:///C:/Users/User/Desktop/fullstakcjs/my_project/img/portfolio4.jpg', 
    'file:///C:/Users/User/Desktop/fullstakcjs/my_project/img/portfolio5.jpg', 
    'file:///C:/Users/User/Desktop/fullstakcjs/my_project/img/portfolio6.jpg', 
    'file:///C:/Users/User/Desktop/fullstakcjs/my_project/img/portfolio7.jpg', 
    'file:///C:/Users/User/Desktop/fullstakcjs/my_project/img/portfolio8.jpg' 
]

let image1 = document.querySelector('.slider_img')
image1.src = src[0]

function changeImg(change){
    let current = 0;
    for(let i = 0; i < src.length; i++){
        if(image1.src == src[i]){
            current = i
        }
    }
    if(src.length - 1 == current && change == 1){
        image1.src = src[0]
    }else if(current == 0 && change == -1){
        image1.src = src[src.length - 1]
    }else{
        image1.src = src[current + change]
    }
}
