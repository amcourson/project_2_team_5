module.exports = {
  format_date: date => {
    let month = (new Date(date).getMonth() + 1 ).toString().padStart(2, "0");
    let dat = (new Date(date).getDate()).toString().padStart(2, "0");
    return `${month}/${dat}/${new Date(date).getFullYear()}`;

    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
  },
  format_time: date => {
    let hours = (new Date(date).getHours()).toString().padStart(2, "0");
    let minutes = (new Date(date).getMinutes()).toString().padStart(2, "0")
    return `${hours}:${minutes}`;
    
    return `${new Date(date).getHours()}:${new Date(date).getMinutes()}`;
  },
}