export function formattedDate(dateString) {
    const [year, month, day] = dateString.split("-");
  
    return new Date(
      Number(year),
      Number(month) - 1,
      Number(day)
    ).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }