'use client'
import { Job } from "@/data";
import Image from "next/image";
import React from "react";
import { BiMoney } from "react-icons/bi";
import { FaMapLocation } from "react-icons/fa6";
import styled, { keyframes } from "styled-components";

interface Props {
  job: Job;
}

// Define keyframes for animations
const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const slideIn = keyframes`
  0% {
    transform: translateX(-20px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Styled components with animations
const Card = styled.div`
  padding: 1rem;
  margin-bottom: 1.5rem;
  position: relative;
  border: 2px solid;
  border-color: rgba(107, 114, 128, 0.4);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  animation: ${fadeIn} 0.5s ease-out;
`;

const BouncyImage = styled.div`
  animation: ${bounce} 1s infinite;
`;

const Title = styled.h1`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  animation: ${pulse} 2s infinite;
`;

const LocationSalary = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  & > svg {
    color: #ec4899; /* Tailwind's pink-700 */
  }
`;

const TagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Tag = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.8);
  padding: 0.25rem 1rem;
  border-radius: 9999px;
  background-color: rgba(16, 185, 129, 0.3); /* Tailwind's bg-green-400 bg-opacity-30 */
  animation: ${slideIn} 0.5s ease-out;
`;

const JobCard: React.FC<Props> = ({ job }) => {
  return (
    <Card>
      <FlexContainer>
        <BouncyImage>
          <Image src={job?.image} alt={job?.title} height={50} width={50} />
        </BouncyImage>
        <div>
          <Title>{job?.title}</Title>
          <div className="flex items-center md:space-x-10 space-x-4">
            <LocationSalary>
              <FaMapLocation className="icon" />
              {job?.location}
            </LocationSalary>
            <LocationSalary>
              <BiMoney className="icon" />
              {job?.salary}
            </LocationSalary>
          </div>
          <TagContainer>
            <Tag>{job?.jobtype}</Tag>
            <Tag>private</Tag>
          </TagContainer>
        </div>
      </FlexContainer>
    </Card>
  );
};

export default JobCard;
