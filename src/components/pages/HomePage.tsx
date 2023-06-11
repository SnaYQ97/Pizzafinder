import useStyles from './HomePage.styles.ts';
import tomato from '../../assets/images/Tomato.png';
import pizzaHero from '../../assets/images/PizzaHero.png';
import { Button } from '../button';
import DecoArrow from '../../assets/icons/DecoArrow.svg';
import Footer from '../footer/Footer.tsx';
import cx from 'classnames';
import CitySelector from '../citySelector/CitySelector.tsx';

const HomePage = () => {
  const { classes } = useStyles();
  return (
    <>
      <section className={cx(classes.section, classes.heroSection)}>
        <div className={classes.heroContainer}>
          <div className={classes.heroImagesBox}>
            <img
              src={tomato}
              className={cx(
                classes.heroDecoTomato,
                classes.heroDecoTomatoLeft
              )}
              alt="Miniature"
            />
            <img
              src={pizzaHero}
              className={classes.heroDecoPizza}
              alt="Pizza"
            />
            <img
              src={tomato}
              className={cx(
                classes.heroDecoTomato,
                classes.heroDecoTomatoRight
              )}
              alt="Miniature"/>
          </div>
          <div className={cx(classes.textBox, classes.heroTextBox)}>
            <div className={classes.headerHero}>
              Pizza Finder
            </div>
            <div className={classes.subheaderHero}>
              Znajdź swoją pizzę
            </div>
          </div>
        </div>
        <div className={cx(classes.flexColumnCentered, classes.ctaContainer)}>
          <div className={classes.ctaHeader}>
            Odkryj najlepsze pizzowe smaki w Twoim mieście!
          </div>
          <div className={classes.ctaButtonBox}>
            <div className={classes.ctaButtonDeco} />
            <Button>Znajdź pizze</Button>
            <div className={classes.ctaButtonDeco} />
          </div>
          <div className={classes.ctaSubheader}>
            Odkryj idealną pizzę w Twojej okolicy
          </div>
          <DecoArrow className={classes.ctaSubheaderDeco} />
        </div>
      </section>
      <section className={cx(classes.section, classes.mainSection)}>
        <div className={cx(classes.textBox, classes.mainTextBox)}>
          <div className={classes.mainSectionHeader}>
            Menu wielu pizzerri w jednym miejscu
          </div>
          <div className={classes.mainSectionSubheader}>
            Z Pizza Finder możesz eksplorować różnorodne menu z
            lokalnych pizzerii. Niech Twoje kubki smakowe przeżyją
            prawdziwą ucztę!
          </div>
        </div>
        <div className={classes.flexColumnCentered}>
          <div className={cx(classes.textBox, classes.locationBox)}>
            <div className={classes.header3}>
              Znajdź swoją pizzę!
            </div>
            <div className={classes.subheader3}>
              Wpisz nazwę swojego miasta i przejdź do
              naszego Findera, który pomoże Ci znaleźć
              Twoją ulubioną pizzę w okolicy.
            </div>
          </div>
        </div>
        <div className={classes.subheader3}>
          <div className={classes.subheader3}>Wybierz Miasto</div>
          <CitySelector/>
        </div>
        <div className={cx(classes.section, classes.contactContainer)}>
          <div className={classes.header3}>Współpracjuj z nami!</div>
          <div className={classes.subheader3}>
            I wspólnie dzielmy się pasją do pizzy
          </div>
          <Button>Kontakt</Button>
        </div>
      </section>
      <Footer/>
      {/*
            Chat Button
            TODO: Create Chat Button
            https://github.com/SnaYQ97/PizzaFinder/issues/9
      */}
    </>
  );
};

export default HomePage;
