async function getMatchData(){
    return await fetch
    ("https://api.cricapi.com/v1/currentMatches?apikey=e2ae3f21-5235-4069-93ec-1b4d74b98ce9&offset=0")
    .then(data=>data.json())
    .then(data=>{
        if(data.status!='success')
        return;

        const matchesList=data.data;

        if(!matchesList)
        return [];

        // const relevantData=matchesList.filter(match=>match.series_id="7f819b4b-9bc8-44d4-8722-c5808ad24a30").map(match=>
            const relevantData=matchesList.map(match=>

            `${match.name},${match.status},${match.date}`);
        document.getElementById("matches").innerHTML=relevantData.map(match=>`<li>${match}</li>`).join('');
        return relevantData;
    })
}
getMatchData();