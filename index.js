async function startData() {
  const data = await fetch("./data.json").then((res) => res.json());
  let text = "";
  data.forEach((i) => {
    text += `
        <a href="https://wa.me/62${i.no
          .replace(/[^0-9]/g, "")
          .slice(1)}" target="_blank">
          <div class="img">
          <img src="${i.fotoselfie}" alt="Foto" height="100px" width="100px" />
          </div>
          <p>
            <span>Nim :</span> ${i.nim} <br />
            <span>Nama :</span> ${i.nama} <br />
            <span>Ttl :</span> ${i.ttl} <br />
            <span>No Hp :</span> ${i.no.replace(/[^0-9]/g, "")} <br />
            <span>Alamat:</span> ${i.alamat}
          </p>
        </a>
    `;
  });

  return (document.getElementById("card").innerHTML = text);
}

startData();
