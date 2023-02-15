export const timeDate = (
  time: string
): { formattedTime: string; formattedDate: string } => {
  const create = new Date(time);
  const hours = create.getHours();
  const minutes =
    create.getMinutes() < 10 ? "0" + create.getMinutes() : create.getMinutes();

  const formattedTime = hours + ":" + minutes;
  const yyyy = create.getFullYear();
  let mm =
    create.getMonth() + 1 < 10
      ? "0" + (create.getMonth() + 1)
      : create.getMonth() + 1;
  let dd = create.getDate() < 10 ? "0" + create.getDate() : create.getDate();
  const formattedDate = dd + "." + mm + "." + yyyy;

  return { formattedTime, formattedDate };
};
