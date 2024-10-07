function Welcome(props) {
    // const name =props.user.name;
    const { name, group } = props;
    return <><h1>Добро пожаловать, {name}!</h1> 
    <h1>Ваша группа: {group}!</h1></>
   }

export default Welcome; 