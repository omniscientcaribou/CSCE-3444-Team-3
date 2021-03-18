import Table from './Table';
import KitchenCall from './KitchenCall';
import './Home.css'
function Home(prop){

    return(
        <div className="Top">
            <div className="Tables">
                <Table ID="1" Seconds={prop.seconds}/>
                <Table ID="2" Seconds={prop.seconds}/>
                <Table ID="3" Seconds={prop.seconds}/>

                <Table ID="4" Seconds={prop.seconds}/>
                <Table ID="5" Seconds={prop.seconds}/>
                <Table ID="6" Seconds={prop.seconds}/>

                <Table ID="7" Seconds={prop.seconds}/>
                <Table ID="8" Seconds={prop.seconds}/>
                <Table ID="9" Seconds={prop.seconds}/>

                <Table ID="10" Seconds={prop.seconds}/>
                <Table ID="11" Seconds={prop.seconds}/>
                <Table ID="12" Seconds={prop.seconds}/>
                <Table ID="13" Seconds={prop.seconds}/>
                <Table ID="14" Seconds={prop.seconds}/>
                <Table ID="15" Seconds={prop.seconds}/>
                <Table ID="16" Seconds={prop.seconds}/>
                <KitchenCall Seconds={prop.seconds}/>
            </div>

        </div>
    );
}

export default Home;