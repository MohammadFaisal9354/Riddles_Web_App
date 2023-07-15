var show=document.getElementById('sbmit');
var next=document.getElementById('nxt');
var ans="";
next.addEventListener('click',()=>{
    document.getElementById('answer').innerText="";
    ans="";
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/riddles',
        headers: { 'X-Api-Key': 'VUz/PhiUoSiFu+bTCDQwWw==CrdmVopAUwelWYmf'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
            
            document.getElementById('title').innerText="Title : "+result[0].title;
            document.getElementById('question').innerText="Question : "+result[0].question;
            ans="Answer : "+result[0].answer;
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
});
next.click();
show.addEventListener('click',()=>{
    document.getElementById('answer').innerText=ans;
});
