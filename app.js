async function getData(){
    try {
        const response=await fetch('https://jsonplaceholder.typicode.com/users/2')
        const user=response.json()
        return user
    } catch (error) {
        console.log(error);
    }
}
async function renderData(){
    const renderedData=await getData()
    let html=''
    renderedData.forEach(element => {
        let htmlSegment=`
        <div class="main-tweet">
            <div class="prof-name">
                <div class="tweet-profile">
                    <h4 >Ervin Howell<i class="fa-solid fa-badge-check"></i></h4>
                    <p id="username">@Antonette . Mar 31</p>
                </div>
            </div>
            <p id="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores vitae ab quam suscipit ducimus! Possimus quia laudantium tempora, ad nam unde, facere quod nihil illum nostrum saepe veniam quae!</p>
        </div>
    `
    html+=htmlSegment
    });
    let mainTweet=document.querySelector('.main-tweet1')
    mainTweet.innerHTML=html
}