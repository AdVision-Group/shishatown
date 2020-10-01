 class Cennik extends React.Component{
                render(){
                    return(<div className='main-cont'> <h1 className="main-h">Shisha Town Menu</h1>
        <div class="chooser-cont">
            <div class="chooser-box"><img src="images/cennik/hookah.svg"></img>
                <div>Vodné fajky</div>
            </div>
            <div class="chooser-box"><img src="images/cennik/water-glass.svg"></img>
                <div>Studené nápoje</div>
            </div>
            <div class="chooser-box"><img src="images/cennik/coffee.svg"></img>
                <div>Teplé nápoje</div>
            </div>
            <div class="chooser-box"><img src="images/cennik/nachos.svg"></img>
                <div>Niečo pod zub</div>
            </div>
        </div> </div> );
                }
            }
console.log('pice')
const domContainer = document.querySelector('.react-cont');
ReactDOM.render(<Cennik></Cennik>, domContainer);
$('.chooser-cont').hide()
