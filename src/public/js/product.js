function handleFiles(event)
{
   let src = URL.createObjectURL(event.target.files[0]);
   let preview = document.getElementById("image-demo");
   preview.src = src;
   preview.style.display = "block";
}
function deleteProducts()
{
   
}
