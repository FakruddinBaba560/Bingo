function createSequentialArray(size) {
    var sequentialArray = [];
    
    for (var i = 1; i <= size; i++) {
      sequentialArray.push(i); // Add the current number to the array
    }
    
    return sequentialArray;
  }
function Square(props) {

    return (
        <button className="tbl-btns" onClick={props.handleclick
        }>{props.value}</button>
    )
}

export default function Table(props) {
    let array = createSequentialArray((props.size*props.size));
    const containerElement = document.getElementById('g-container');
    let size=null
// if (props.size === 5) {
//   if (containerElement) {
//    size=5
//   }
// } else if (props.size === 6) {
//   if (containerElement) {
//     size=6


//   }
// } else if (props.size === 7) {
//   if (containerElement) {
//     size=7
//   }
// }


    return (
        <>  <div className="tbl-container">
          <div className="g-points">
             {props.Bingo[0].map((element,index)=>{
              return( <Square style={{
                display: 'grid',
                // gridTemplateRows: `repeat(${props.size}, 50px)`,
                gridTemplateColumns: `repeat(${size}, 50px)`,
              
              }} key={index} className='tbl-btns' value={props.Bingo[0][index]}/>)
             })}
            </div>
            <div style={{
          display: 'grid',
          // gridTemplateRows: `repeat(${props.size}, 50px)`,
          gridTemplateColumns: `repeat(${props.size}, 50px)`,
        
        }} id="g-container">
                {
                    array.map((element, index) => {
                        return (
                            <Square key={array[index]} value={props.values[index]}
                                handleclick={() => props.handleclick(index)}
                            />
                        )
                    })

                }
            </div>
            
        </div>
        </>)
}