interface Props {
    url : string
}

function AnimalCard({ url } : Props) {

    return(
        <>
        <article style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '200px',
            height: '300px',
            border: '1px solid black',
            borderRadius: '12px',
            backgroundColor: '#f2f2f2',
            overflow: 'hidden',
        }}>
            <div style={{ 
                width: '100%',
                overflow: 'hidden',
                flex: '1',
            }}>
                <img style={{
                    width: '100%',
                    height: '100%',
                }}
                src={url} 
                loading="lazy"
                />
            </div>
        </article>
        </>
    )

}

export default AnimalCard;