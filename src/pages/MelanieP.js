export default function examplePage() {
    return (
        <div className='container'>
            <title>Website</title>
            <link rel='icon' href='/favicon.ico' />

            <main>
                <div className='underline'>
                    <h1 className='title'> Melanie's (definitely not stolen) opossum jokes</h1>
                </div>
                <img
                    className='pic'
                    src='https://image.al.com/home/bama-media/pgfull/img/alphotos/photo/2015/10/16/possums-d0934aa6230858a8.jpg'
                    alt='silly little marsupial'
                />

                <p className='description'>
                    What do you call a group of possums? A possy.<br/>
                    What kind of possums roll the best? O-possums.<br />
                    Why did the possum cross the road? To visit his flat mate.<br />
                    Why did the chicken cross the road? To prove to the possum that it is not impossible.<br />
                    What do you call a possum laying in the middle of the road? Clearly, that's a Himalayan possum.<br />

                </p>


                <a className='button' href='/'>
                    <p>go home</p>
                </a>
            </main>

            <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 60rem;
            margin: auto;
          }

          main {

            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .title {
            background-color: white;
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .underline {
            /* border-bottom: solid black; */
            margin-bottom: 1.5rem;
          }

          .description {
            background-color: white;
            line-height: 1.5;
            font-size: 1.5rem;
          }

          .pic {
            height: 450px;
            width: 450px;
          }

          .button {
            /* margin: .5rem; */
            background-color: white;
            flex-basis: 45%;
            padding: 0.5rem;
            text-align: left;
            color: white;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .button:hover,
          .button:focus,
          .button:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .button p {
            color: black;
            font-size: 1rem;
            font-weight: 600;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>

            <style jsx global>{`
          html,
          body {
            background-image: url("https://media4.giphy.com/media/d2Z3TajxxaP1OV44/giphy.gif");
            color: black;
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
        </div>
    );
}