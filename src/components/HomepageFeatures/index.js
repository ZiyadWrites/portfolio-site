import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Writing with Clarity',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        I turn tech-speak into human-friendly content so that you don’t have to
         decode a manual like it's encrypted. API docs, guides, and tutorials 
         should flow smoothly. Good documentation works for you, not against you.
      </>
    ),
  },
  {
    title: 'Focus on What You Do Best',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        As a technical writer, you focus on crafting clear, valuable content, I built
        this site with Docusarus to let Docusaurus handle the boring stuff. Just drop
        your docs into the docs directory, and let the magic happen.
      </>
    ),
  },
  {
    title: 'Built with React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        With React, you can tweak and customize your layout while keeping
        the consistent look and feel of your header and footer. Flexibility, with style!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
