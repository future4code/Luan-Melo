import React from 'react';
// import styled from 'styled-components';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  

  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://ca.slack-edge.com/TLAVDH7C2-U023Z1E6FB7-6b69d4947ec6-48" 
          nome="Luan Melo" 
          descricao="Sou Luan, tenho 22 anos sou de Cruz Das Almas - BA. Amo programação e, pinturas de telas. Amo músicas americanas e meu cantor favorito é o Chris Brown."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
      <CardPequeno
              icon = {'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEUAAAD///9oaGjg4OBJSUk0NDRBQUEvLy/19fX6+vpycnKamppYWFjY2Ng9PT3b29vs7OzOzs6RkZElJSVgYGC+vr6pqamzs7Pm5uZ5eXkJCQkZGRmBgYFtbW0yMjLDw8NSUlKKioopKSmsrKwUFBSgoKAeHh63t7eFhYWb2HZSAAAMDElEQVR4nOWd65qiMAyGYRBBZBSPjDqextGd+7/CBQ+QQmmT0gLq93MfduQF2jRpklq2aQ0iZ78cTlfhyJttftfW+ncz80bhajpc7p1oYPz3LYN/23fiaehuLJE2bjiNHd/gXZgiHMdBX4jGqh/EY0N3YoJwPJwT4HLNhyYodRP6i+CihHfTJVjo/mK1EvqnsAbdQ+FJK6Q+wig+aMC76RBH2u5LF+Fkqw3vpu1E051pIfTPrma+VO5Zy9eqgdBZGcC7aeV0gHCiZhmwmtf+WGsSTnpG+VL1ajLWImyArz5jDcKxDuOHU1hjsaNM6JubX3haKc+rqoTnRvlSnRslnNRZe6rqojYcVQgHQQt8qQIVf1mBcNESX6pFA4S+WQsv05w841AJJ63ypaKORiLhd9t8ib4NEn55bdNd5X2ZImxzimFFmXAIhMe2uYCOBgj95lahGIXoORVLGHVjCObysJEcJOFn20Acfeok7M4cA4Wbb1CEy7ZZKrTURThsm6RSQz2E07Y5BJrqIOzCQq1a8iWclPCvbQaJ/uoSdvkTvUn2oUoIuzvJ5JJMN2LCrpoJVmKjISTspqEvS2j6RYRdXKrxJVrACQijtu+bIMEyvJpw0DVvQiSvOs5YTdgtf1CmkE7YJY8eoyOV8Fmm0VxVE2oF4Vfb96ugighcBeEzzTIPeRTCbvsTVeL7GVzC9kP3auIG/HmEftt3qixeiJFH+NH2jSrrA0f4fIYiF8dklAkHbd9lLZVXb2XCtraw9SiQEz7rPPpQaT4tEbaRZaFTFxlh83kyulXMuykQPq8pzOULCZ97mrkpEBGO2747LRoLCJ/Lr69SWE347JbioUklYTMJsebVqyJ8lVfIvkRI+CqvkH2JgFD6Cte9D7Pa3hQ8tHro+6G/q7bSIMuESyhLOoxNVgkSJfPw5vmlOaEj/j8bfZVIOhSJCzetvBQlJ5RkpiOzVxqTZNtolV2YEUpWpHPuz7QpyaDKhlRGKHEqFNKPDUsyFDMXIyOUVJ917SOVfqbu4zoLd72loYhMpkEi/6bopq+bnFTjz0IIRjIzZu/kQSgrkCwQRvOrwjA8JOol6vf7o9HIdXc7z/v5mc0ul83m93e9lvxdvP4VHoiMcMsSSj3f4jtsOiF6V9p3kRE+5po7YSy7/E4IvpRGqxK2+e8O/pCEMUN4kF1+J4SFcg2GdE7w1fWRhAdIKA/PPAhh8kpTvsgGTORxtqyWEt4/0xvhSXp1RghWC3ZkosC5pANYD6cLLzThCRAepFfnhEyGdQNFiEfwREfpP6AJDzkhIoYICBnfxHhe2D7/rf3tX9CEt8/0SojYbWIIYdTV7GD8Ad/LI4sQT7jICBFRUpbQ+sjNhk/p0kIUGPN5vQeeMMgIEXsVBULLBRbY2GAERmKc+4N4wsuDEBMHLhIyg1G6XlDS+pP/C3jCa2zYsnFpsmVCmLn6KfG4VTQH6ydmGBEIh3dCzPqLQwi9Yv9AuHeUQHJzxI50AuH8Toj5QR4hsxzWnIJTNhKZCITWjRB1KZeQcf3/Yf4MUi4wEqVcegqhcyVEzRMVhPBjcn4xfwgjaCTKQ4hCGF8JUXuGVYRwQtA1GGPxU6MQBldClMWuJLTWTu416qjOmIHtP65HQCHsp4S4je1qQia+UH8wwoJ7/tdFIUyWphbyShEhrMxxalpGaCRG/EtIhE5CiHvsQkKrBx58rX1ksFAqGon8xyiE/xJC3NgRE1oXsMJSH4wjkZHIRCKcJoS4Zy4hZAZj5dOXCBiJgeCuSIRhQoiLREgJYYZutEP9zYLAMxLGp0mErm0NcFODnBAOxgE9RVVqJPLfoRBuBhYyKx9ByLg71MEYSo1EJhJhwoe8EENoqYcagZGQRtNphI6FnBZwhEyokTAYMUYiE41wbyGDZUhCqw++NuxgFHoSZdEIlxayDhZLyOw04p4emIRRa3ca4dBCTgl4QmqoERoJ1F4cjXBqIQNlBEK4USSN+1+cfEMLOWBohCsLuYykEFo7MLDEUz8skMAOWxphaFUs4IsiETJhFtGbAeG6L/QuD41wZCH3comEcDBWL8FSI3H/RAlrWRqhZ81wF1IJmbg//39Bw0KpWKURziykx0omZHqO8UKNwG2mBXhohBsLGSCjEzKDsbyWJhuJTDTCXwv511UI4WpzzD5J+IKpW5A0QvTTUyKEYSVmMIJBSne0aIRoRjVCpnA173QDu5HQd1ip79DgOCzmMd23mtds8RU5jkwdh8bm0sRnKCZSjdOt2F4p1ZjYBIc6l5qyh4yvCN4Xr+vRhDSZUu2hoTVNVUYq+ELBdDqgnKxAXdOYWZdafXD/kwvYa8l0Zl6nPGcpE3VdasK3YOfQdJgdS4CpkRiBx4BPdqT6Fgb8Q2Y1c7eDhfnFuQ9/+HKxu8hU/1C/j2/1gHuYmbs1rJnL90q2IB8B6V9QfXztcRqmgRp8fvn7gp7EBpDjko+ocRrNsTYmMljYH7ubj0JqBbPCwTxvaqxNb7yUiV2X/nTvy+Yt02B65ad8jUWNl2qNeTOF1LyZY746cG8j/1/ylTg15q1x34LZRfwi7T9B6yLLDaHuW+jbe7I+wNdG3dCHptERr0Koe0/a9g+ZL1QhXRFtGqn7h7r2gH+AI+Egl/OsPpCmkbwHrGUfH8a5KWtMRjMwjKND5WXkfXwduRjMJ1bjBDb4oVeaRnIuhoZ8GhhXGteqdDqABd9nReoyOZ+mfk4UdHVrF9LITSM5J6puXht0dQcaiqGkXiM5r61mbmKf50jUEvzmebtz9NzEWvmlR8zcQJXYNNLzSzXlCOs8AANuK5bX7wRCp06e95p1ClRTvfiCqTnpo4MTND3PWzlXv8rV1aJqr1EhV1+x3gK6ugaahoRVXqNCvYVSzUxID7BQBUwjXCgp1Myo1D3Bj8hYt1NoGvMZX6HuSaF2Da6RDRaScgOqKrVr1PpD6OfoLCThiGMaVeoPiTWksFO/8QZv5YCqSg2pfZBenBNeQICTFoxRExNQTZ+wSh0wpZYbdrRr6HAIOKudFWu50fX4fVDWSdoSqyU2oIrtOMDU49sH2dV3QuBIjH803DtWcKvniCRkeiqg+2Iwn0uTKvfqJvbFoPY2af400lGxuQmxtwmxPw0xi0mPTjTCQn8aWo+h5dpzG9fu93tAISz2GCL0iYq2M/fWSyjTbrfj3tWoqH4duQe4y0rtE0Xo9fVo3/R1a9/0OUm03y8Wi3//4vh0Wi6X5/N5mGg6PR7/vlerINh+fKQtl9J+S/3RyN15P7OrfnJ5Be3KT23kzsCXSu711Uq/trT11b3lVfKwkqd1fVzpA9tfH1j6vK6Pa3p9Wn/fQR4zJvdre/2ee2/QN/GZel/6shUKt/dlB/qXYtWTmmN+/9LX70H7Bn2EX+YlVvaCfpmXWN3P+/V7sr9BX/3XPxvhDc63eP0zSt7gnJmntxjys4KefLJBnPf0Bmd2vf65a29wdt4TG0Xs+YdPO5+iz7B8g3NI3+As2Tc4D/gJTQbxTOc3OJf72fx9hbPV7cEzzTZeebUmJ7Sjtm+bIMGWg4BQumvaHYm2jUSETzOhCg8yEhI2lRJUU0shg5hQX3K6QQ3FCBJC/dnN2jWVEMgIQUeSborXhYJG2HE/g+9P0Ag7/aHKPlEcYYenG8kkgybsrNEQmwkKYUdNP+7EQhxhJxdwyAwfJKEddc3T8LD5PVhCraVpGhSik3vQhN3y+o/42yYQdmi+oZyKSiFs/FjHCnkVUTUNhN1YwskXanUIOxDw54buNRK2kKXPaE5OkCQTtjvhKBy8rEBoD9raCA+qY4Z6CdMuei3wXagjsA5hG3k3xTwZ04S238ARpEAr5RRsZULbHje3Ug3H8tsxQJgMx2ZSbntqA1AHYSOM9fhqEyaMZlcA85p8Gght2zE356xKhZ2tECbz6tlE1wH3rKWERQthoonusudt7c/zLl2Eth3FB214h1hflZU+wkT+SYeJDE9aC6y0EibyF0GdNeslWOiuH9NNmGo8VLMg82GNpUulTBCmGscB5UTyfhCboEtlijCV78TT0BWXQm7ccBo7JisbTRLeNIic/XI4XYUjb7b5XVvr383MG4Wr6XC5dyIVn5am/7Qirlx52/BIAAAAAElFTkSuQmCC'}
              tipo = {'Email:' }
              informacao = {'luan_decruz19@hotmail.com'}
          />
      </div>

      <div className="page-section-container">
      <CardPequeno
              icon = {'https://www.pngitem.com/pimgs/m/276-2761008_gps-icon-gps-black-png-transparent-png.png'}
              tipo = {'Endereço:' }
              informacao = {'Cruz Das Almas, Bahia'}
          />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Dev FullStack" 
          descricao="Experiência com front-end e noções básicas em backend" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
