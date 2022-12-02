import { Button, Divider, Image } from "antd";
import { useEffect, useState } from "react";

function TaskIntro() {
  const [isProgress, setIsProgress] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setIsProgress(false);
    }, 1000);
  });

  return (
    <div>
      <div>
        <h1>Task</h1>
        <p>
          Pada tugas kali ini, kita akan menyelesaikan <i>Bugs</i> yang dibuat
          oleh @Fasma karena kebanyakan makan indomie. <i>Bugs</i> kali ini
          tidak memerlukan restart <i>"npm start"</i> karena dari reactJS sudah
          menyediakan hot reload yang otomatis melakukan render saat kalian
          melakukan perubahan kodingan. Kalian juga bisa buka lewat handphone
          bila dalam subnet yang sama
        </p>
        <p>
          <b>
            <i>
              Ingat kalian hanya perlu fokus pada halaman yang dirender dan
              comment "// TODO: Find the Bugs"
            </i>
          </b>
        </p>
        <Image src="/task-intro.png" width="50%" />
      </div>
      <Divider />
      {/* TODO: Find the Bugs */}
      {/* Ini seharusnya redirect ke TaskGame, tapi kok malah ke Home */}
      <Button
        type={isProgress ? "dashed" : "primary"}
        loading={isProgress}
        href="/task/game"
      >
        {isProgress ? "Baca dulu" : "Letgo!"}
      </Button>
    </div>
  );
}

export default TaskIntro;
