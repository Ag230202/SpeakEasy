export const formatDate =(date, config)=>{

    const defaultOptions = {days:'numeric', month:'short', year: 'numeric'}
    const options = config ? config : defaultOptions;

    return new Date(date).toLocaleDateString("en-US", options);
}
