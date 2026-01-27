function truncateString(str, num){ 
  if(str.length > num){ 
    let truncate = str.slice(0,num); 
    return truncate + "..."; 
  }
  return str; 
}

