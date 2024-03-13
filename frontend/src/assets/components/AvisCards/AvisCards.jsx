import { useEffect, useState } from 'react';

function AvisCards({
    id,
    nom,
    commentaire,
    date,
    note
}) {




    return (
        <div className='CardsAvis'>
            <p>            {nom}</p>
            <p>      {commentaire}</p>
            <p>       {note}/5</p>
        </div>
    );
};

export default AvisCards;