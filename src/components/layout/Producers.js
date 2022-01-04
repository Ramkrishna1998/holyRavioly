import Card from "../ui/Card";
import ProducerInfo from "./ProducerInfo";
import classes from './Producers.module.css';

function Producers (props){

    return (
        <div>
            {props.producers.map((producer) => {
                return (
                    <Card>
                        <div className={classes.name}>{producer.fullname}</div>
                        <div>{producer.title}</div>
                        <ProducerInfo producerinfo={producer}/>    
                    </Card>
                    );
            })}
        </div>
    );
}

export default Producers;