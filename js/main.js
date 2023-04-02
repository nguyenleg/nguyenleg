const API_URL = 'https://fakestoreapi.com/products?limit=8'

const fetchProducts = async () => {
  const response = await axios.get(API_URL) // lấy phản hồi từ trên server
  // console.log(response)
  const data = response.data // truy cập vào trường data từ phản hồi
  // console.log(data)
  // console.log(data)
  mapDataFromApi(data) // truyền data sau khi gọi API vào hàm mapDataFromApi
}

fetchProducts()

const productsQuery = document.querySelector('#products')



// truncate text to get only 40 characters, ...


const truncate =(string, length) => {
    if (string.length > length) {
        return string.substring(0, length) + '...'
    } else {
        return string
    }
}



const mapDataFromApi = (params) => {
  // nhận data truyền từ hàm fetchProducts thông qua biến params
  // console.log(params)
  // map data từ API
  const products = params?.map((item, index) => {
    console.log(item)
    return `
            
    <div class="card w-[1300px] bg-base-200 shadow-xl image-full">
    <figure><img src=${item.image} alt="Shoes" class='w-[400px] h-[300px] object-cover ' /></figure>
    <div class="card-body w-[325px] h-[300px]">
      <h2 class="card-title">${truncate(item.title, 55)}</h2>
      <p>${truncate(item.description, 1000)}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary "> $ ${item.price}</button>
      </div>
    </div>
  </div>
            
   `
  })

  productsQuery.innerHTML = products.join('')
}

const buttonQuery = document.querySelector('#clickme')
console.log(buttonQuery);

function handleClick(params){
    buttonQuery.innerText = 'Bấm lần nữa để thoát ';
}

function doubleClick(params){
    buttonQuery.innerText = 'doubleClick !';
    alert('Are you sure about that ?') 
    window.location.href = 'login.html';
}

const button = document.querySelector('#click')
console.log(button);

function handleClick(params){
    buttonQuery.innerText = 'Bấm lần nữa để thoát ';
}

function Click(params){
  button.innerText = 'Click !';
  alert('Wellcome to the new world') 
  window.location.href = 'main2.html';
}