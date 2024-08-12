import React from "react";


function Gallery({arts,addToMyCart}){
    return(
        <div className="art-collection">
        {arts.map(art=>(
            <div key={art.id} className="art-profile" >
             <h2>{art.name}</h2>
             <p>Title {art.title}</p>
             <p>Artist {art.artist}</p>
             <p>Year {art.year}</p>
             <p>DEscription {art.description}</p>
             
             <img src={art.avatar_url} alt={`${art.name} profile`} />
             <button onClick={() => addToMyCart(art)}>Add to My Cart</button>
                </div>
      )

    )}
</div>
)
}
export default Gallery
