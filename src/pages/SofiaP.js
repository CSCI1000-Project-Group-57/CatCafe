export default function examplePage() {
    return (
      <div className='container'>
        <title>Website</title>
        <link rel='icon' href='/favicon.ico' />

        <main>
          <div className='underline'>
            <h1 className='title'>Hey, I'm an Isopod. </h1>
          </div>
          <img
            className='pic'
            src='https://stay-curious.com/wp-content/uploads/2014/09/bathynomus_00.jpg'
            alt='sofia p'
          />

          <p className='description'>
            "
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus id mauris in mattis. Maecenas non molestie libero, nec aliquam ipsum. Nulla facilisi. Fusce magna mauris, facilisis a porttitor sollicitudin, tempus in risus. Praesent commodo, orci a ullamcorper tristique, neque magna iaculis odio, auctor pellentesque nunc sem non velit. Mauris at orci venenatis, facilisis turpis nec, faucibus orci. Donec sed mollis ipsum, sit amet ultrices lorem. Sed et libero nec mi ultrices iaculis id non sapien. Nulla laoreet aliquam porta.

Suspendisse eu enim tristique, pretium nulla et, semper libero. Sed ac dui vel sem interdum mattis ut vestibulum ligula. Proin eu turpis at dui semper pellentesque a in risus. Nunc nec elementum eros, sed luctus ipsum. Nullam posuere purus at est semper elementum. Aliquam bibendum, mi ac auctor imperdiet, orci velit sodales velit, vel molestie sem mi ac purus. Aenean congue dui at elit rhoncus, sit amet lacinia justo feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac finibus augue. Etiam aliquet maximus cursus. Integer urna ex, porttitor a euismod ut, dignissim sit amet elit. Duis bibendum, felis id eleifend condimentum, mauris massa mollis nunc, et aliquam justo massa ac mi.

Nulla dictum vitae nulla quis pulvinar. Proin tincidunt velit sit amet ipsum vehicula, in fermentum libero tempus. Sed euismod est eu ex posuere efficitur eu non sem. Mauris et condimentum orci. Nullam ultricies eget erat id tempor. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non tortor vel dui dignissim imperdiet eget a turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce eget interdum lectus. Pellentesque interdum at urna vulputate dapibus. Phasellus non imperdiet ante, ut efficitur nulla. Mauris a condimentum ligula. Fusce eu vehicula diam.

Proin porttitor eros a odio vulputate mattis. Nunc metus nunc, rhoncus vitae fringilla nec, vulputate ac nunc. Morbi in lobortis urna. Integer sollicitudin velit molestie neque viverra, gravida dapibus mi accumsan. Curabitur semper, risus ut imperdiet eleifend, turpis augue vulputate ex, sed pretium magna sem vulputate velit. Suspendisse eu quam id turpis pretium ultricies. Nullam nec facilisis libero, eget rhoncus tortor. Etiam dapibus enim eget est congue imperdiet. Donec sit amet dui sed quam feugiat commodo nec ac dui. Etiam a lobortis purus. Nunc porttitor bibendum nisl. Duis sit amet nisi rhoncus, blandit nibh a, semper tellus.

Maecenas in rhoncus leo. Curabitur sagittis sem ut aliquam dignissim. Maecenas quis massa eu mauris ultrices laoreet. Pellentesque vitae enim sed dui egestas consequat sit amet eu dui. Sed euismod justo viverra quam iaculis faucibus quis at sem. Nam finibus at erat nec dapibus. Quisque id facilisis magna. Aenean dapibus tempus malesuada. Praesent sagittis, eros blandit cursus efficitur, augue enim posuere sapien, sit amet hendrerit lacus urna a ligula. "
          </p>

          <a className='button' href='/'>
            <p> Back to Home Page</p>
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
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .underline {
            /* border-bottom: solid black; */
            margin-bottom: 1.5rem;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          .pic {
            height: 450px;
            width: 450px;
          }

          .button {
            /* margin: .5rem; */
            flex-basis: 45%;
            padding: 0.5rem;
            text-align: left;
            color: inherit;
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
            font-size: 1rem;
            font-weight: 600;
          }

          code {
            background: #fafafa;
            backgroundImage = url('https://i.pinimg.com/originals/66/9f/9e/669f9e9981a7cb4bfe804c72fb79dbdc.gif')
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