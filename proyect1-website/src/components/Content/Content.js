import React, { useEffect } from 'react';
import {Container, Section} from '../../globalStyles';
import{
	ContentRow,
	TextWrapper,
	TopLine,
	Heading,
	ContentButton,
	Subtitle,
	ImgWrapper,
	Img,
	ContentColumn
} from './ContentStyles';

import {useInView} from 'react-intersection-observer';
import {useAnimation} from 'framer-motion';


export const Content = ({
	primary,
	topLine,
	headline,
	description,
	buttonLabel,
	img,
	alt,
	backgroundColor,
	inverse,
	reverse,
}) => {
	const initial = {opacity: 0, y: 30};
	const animation = useAnimation();

	const {ref,inView} = useInView({threshold: 0.2});
	useEffect(() => {
		if (inView) {
			animation.start({
				opacity:1,
				y:0,
			});
		}
	}, [inView, animation]);
	return (
		<Section inverse={inverse} ref={ref}>
			<Container>
				<ContentRow reverse={reverse}>
					<ContentColumn>
						<TextWrapper>
							<TopLine 
								initial={initial} 
								transition={{ delay:0.3, duration:0.6 }}
								animate={animation}
							>
								{topLine.text}			
							</TopLine>
							<Heading 
								initial={initial} 
								transition={{ delay:0.3, duration:0.6 }}
								animate={animation}
								$invert={inverse}
							>
								{headline}
							</Heading>
							<Subtitle 
								initial={initial} 
								transition={{ delay:0.3, duration:0.6 }}
								animate={animation}
								$invert={inverse}
								>	
								{description}
							</Subtitle>
							<ContentButton
								initial={initial} 
								transition={{ delay:0.3, duration:0.6 }}
								animate={animation}
								$invert={inverse}
							>
								{buttonLabel}
							</ContentButton>
						</TextWrapper>
					</ContentColumn>
					<ContentColumn
						initial={initial} 
						transition={{ delay:0.3, duration:0.6 }}
						animate={animation}
					>
						<ImgWrapper>
							<Img
								src={img}
								alt={alt}
								whileHover={{rotate:2,scale:1.02}}
								transition={{ duration: 0.5 }}
							/>
						</ImgWrapper>
					</ContentColumn>
				</ContentRow>
			</Container>
		</Section>
	)
}

