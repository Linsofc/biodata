async function friendListsElement() {
  const friendLists = document.getElementById("card");
  const data = await fetch("./data.json").then((res) => res.json());

  const lists = `
    ${data
      .map(
        (i) => `
        <a href="https://wa.me/62${i.no
          .replace(/[^0-9]/g, "")
          .slice(1)}" target="_blank">
          <img src="${i.fotoselfie}" alt="Foto" height="120px" width="100px" />
          <p>
            <span>Nim :</span> ${i.nim} <br />
            <span>Nama :</span> ${i.nama} <br />
            <span>Ttl :</span> ${i.ttl} <br />
            <span>No Hp :</span> ${i.no.replace(/[^0-9]/g, "")} <br />
            <span>Alamat:</span> ${i.alamat}
          </p>
        </a>
    `
      )
      .join("")}
  `;

  return (friendLists.innerHTML = lists);
}

friendListsElement();
