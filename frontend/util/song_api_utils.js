

export const fetchSong=(songId)=>{
  return $.ajax({
    method: "GET",
    url: `api/songs/${songId}`
  });
}