let count = 0;

const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decreaseButton = document.getElementById('decrement');



function increaseCount() {
  if( count >= 10){ //count == 10
    alert('The count is overflow');
    return; //funtion will be end
  }else{
    count++;
  counterElement.innerText = count;
  }
  
}

incrementButton.addEventListener('click', increaseCount);
decreaseButton.addEventListener('click', function () {
  // count = count - 1;
  if (count == 0){
    alert('count wil be negative');
  } else{
    count--;
    counterElement.innerText = count;
  }
  
})