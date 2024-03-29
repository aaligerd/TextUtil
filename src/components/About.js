import React,{useState} from 'react'

export default function About(props) {
    const [btnclass,setBtnClass]=useState('btn btn-light');
    const [btntxt,setBtnText]=useState('Dark Mode');
    const [colourtoogle,setColor]=useState({color:'black',
    backgroundColor:'white'});

    const radioStyle={
        float:'right',
        marginRight:'10px'
    }
    const toogleBackground=()=>{
        if(btntxt=='Dark Mode'){
            setColor({
                color:'white',
                backgroundColor:'#363636'
            });
            setBtnText('Light Mode');
            setBtnClass('btn btn-light');
        }else{
            setColor({
                color:'black',
                backgroundColor:'white'
            });
            setBtnText('Dark Mode');
            setBtnClass('btn btn-dark');
        }
    }
    


    return (
        <div className="containerfluid">
            <div className="container">
                <div className="accordion" id="accordionExample" >
                    <h1 className="my-3" style={{color:props.mode=="light"?'black':'white'}}>{props.title}</h1>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor:props.mode=='light'?"white":"#60778a"}}>
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{backgroundColor:props.mode=='light'?"white":"#60778a",color:props.mode=='light'?'black':"white",fontSize:"25px"}}>
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor:props.mode=='light'?"white":"#60778a"}}>
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{backgroundColor:props.mode=='light'?"white":"#60778a",color:props.mode=='light'?'black':"white",fontSize:"25px"}}>
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor:props.mode=='light'?"white":"#60778a"}}>
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{backgroundColor:props.mode=='light'?"white":"#60778a",color:props.mode=='light'?'black':"white",fontSize:"25px"}}>
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
