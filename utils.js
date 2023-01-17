const getLocationOfTheColour = (imageData,color)=>{
    let locs = [];
    let {data} = imageData;
    for(let i = 0; i < data.length; i+=4){
        let iColor = {
            r:data[i],
            g:data[i+1],
            b:data[i+2]
        }
        let pIndex = i / 4;
        let loc = {
            x:pIndex%imageData.width,
            y:Math.floor(pIndex/imageData.width)
        }
        if(colorMatch(iColor,color)){
            locs.push(loc);
        }
    }
    return locs;
}
function colorMatch(c1,c2,trashold = 170){
    return sqDistance(c1,c2) < trashold*trashold;
}
function sqDistance(c1,c2){
    return (c1.r-c2.r)**2+(c1.g-c2.g)**2+(c1.b-c2.b)**2;
}

function locationAvarage(locs){
    let res = {x:0,y:0};
    locs.forEach(loc=>{
        res.x+= loc.x,
        res.y+= loc.y
    });
    res.x /= locs.length;
    res.y /= locs.length;
    return res;
}