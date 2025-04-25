import Banner from '../../components/atoms/Banner/Banner.jsx';
import bannerImage from '../../assets/images/about-banner.png';
import './About.scss';
import Collapse from '../../components/molecules/Collapse/Collapse.jsx';

function About() {
  return (
    <div className="about">
      <Banner bannerImage={bannerImage} />
      <div className="about__collapse-container">
        <Collapse title="Fiabilité"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate eget turpis semper ultricies. Maecenas mattis libero vel dui placerat vestibulum. Curabitur at neque enim. Nullam faucibus sagittis libero, a posuere augue. Donec sollicitudin, est id venenatis vulputate, massa velit aliquam quam, eget tempus turpis purus id augue. Curabitur ultrices molestie dapibus. Aenean eget mi id mauris varius volutpat in quis lacus. Morbi in arcu eu ipsum sodales tincidunt. Aliquam vitae eros nec massa vehicula vulputate consectetur vel leo. Quisque mi libero, blandit consequat vulputate consectetur, gravida a justo. Proin sed pulvinar erat. Integer varius tempus dolor, quis tempor lectus maximus vitae. Pellentesque pharetra interdum fermentum. Proin accumsan erat urna, in congue felis laoreet ac. Phasellus blandit nunc lorem, et consectetur lectus pretium vel." />
        <Collapse title="Respect"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate eget turpis semper ultricies. Maecenas mattis libero vel dui placerat vestibulum. Curabitur at neque enim. Nullam faucibus sagittis libero, a posuere augue. Donec sollicitudin, est id venenatis vulputate, massa velit aliquam quam, eget tempus turpis purus id augue. Curabitur ultrices molestie dapibus. Aenean eget mi id mauris varius volutpat in quis lacus. Morbi in arcu eu ipsum sodales tincidunt. Aliquam vitae eros nec massa vehicula vulputate consectetur vel leo. Quisque mi libero, blandit consequat vulputate consectetur, gravida a justo. Proin sed pulvinar erat. Integer varius tempus dolor, quis tempor lectus maximus vitae. Pellentesque pharetra interdum fermentum. Proin accumsan erat urna, in congue felis laoreet ac. Phasellus blandit nunc lorem, et consectetur lectus pretium vel." />
        <Collapse title="Service"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate eget turpis semper ultricies. Maecenas mattis libero vel dui placerat vestibulum. Curabitur at neque enim. Nullam faucibus sagittis libero, a posuere augue. Donec sollicitudin, est id venenatis vulputate, massa velit aliquam quam, eget tempus turpis purus id augue. Curabitur ultrices molestie dapibus. Aenean eget mi id mauris varius volutpat in quis lacus. Morbi in arcu eu ipsum sodales tincidunt. Aliquam vitae eros nec massa vehicula vulputate consectetur vel leo. Quisque mi libero, blandit consequat vulputate consectetur, gravida a justo. Proin sed pulvinar erat. Integer varius tempus dolor, quis tempor lectus maximus vitae. Pellentesque pharetra interdum fermentum. Proin accumsan erat urna, in congue felis laoreet ac. Phasellus blandit nunc lorem, et consectetur lectus pretium vel." />
        <Collapse title="Sécurité"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate eget turpis semper ultricies. Maecenas mattis libero vel dui placerat vestibulum. Curabitur at neque enim. Nullam faucibus sagittis libero, a posuere augue. Donec sollicitudin, est id venenatis vulputate, massa velit aliquam quam, eget tempus turpis purus id augue. Curabitur ultrices molestie dapibus. Aenean eget mi id mauris varius volutpat in quis lacus. Morbi in arcu eu ipsum sodales tincidunt. Aliquam vitae eros nec massa vehicula vulputate consectetur vel leo. Quisque mi libero, blandit consequat vulputate consectetur, gravida a justo. Proin sed pulvinar erat. Integer varius tempus dolor, quis tempor lectus maximus vitae. Pellentesque pharetra interdum fermentum. Proin accumsan erat urna, in congue felis laoreet ac. Phasellus blandit nunc lorem, et consectetur lectus pretium vel." />
      </div>
    </div>
  );
}

export default About;
