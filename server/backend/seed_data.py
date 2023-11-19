import os
import sys
import django

# Add your Django project root directory to the Python path
sys.path.append('/path/to/your/django_project_root_directory')
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

# Initialize Django
django.setup()

# Now you should be able to import your Django models and serializers
from backend.models import StudyPlan
# Add other necessary imports here



def seed_data():
    study_plan_data = [
        {
        "date": "2023-11-19",
        "topics": [
            {
            "title": "Hardware Interfacing Concepts",
            "type": "Learning",
            "duration": 90,
            "content": [
                {
                "concept": "I/O Devices",
                "details": "Studying input/output devices like sensors, actuators, and communication interfaces."
                },
                {
                "concept": "Microcontrollers/Microprocessors",
                "details": "Understanding the basics of microcontrollers and microprocessors used in embedded systems."
                },
                {
                "concept": "Serial Communication Protocols",
                "details": "Exploring protocols like UART, SPI, and I2C used for communication in embedded systems."
                },
                {
                "concept": "Interrupt Handling",
                "details": "Understanding interrupt mechanisms in microcontrollers for handling external events."
                }
            ]
            },
            {
            "title": "Troubleshooting Techniques",
            "type": "Learning",
            "duration": 60,
            "content": [
                {
                "concept": "Debugging Methods",
                "details": "Learning common debugging methods and strategies for identifying and fixing errors."
                },
                {
                "concept": "Logic Analyzers and Oscilloscopes",
                "details": "Understanding the use of logic analyzers and oscilloscopes for hardware debugging."
                },
                {
                "concept": "Error Handling Strategies",
                "details": "Exploring techniques to handle errors and exceptions in embedded systems."
                }
            ]
            },
            {
            "title": "Real-Time Operating Systems (RTOS) Concepts",
            "type": "Learning",
            "duration": 120,
            "content": [
                {
                "concept": "Task Scheduling",
                "details": "Understanding task scheduling algorithms like preemptive and cooperative scheduling."
                },
                {
                "concept": "Inter-Task Communication",
                "details": "Exploring communication mechanisms between tasks in RTOS."
                },
                {
                "concept": "Synchronization and Resource Management",
                "details": "Understanding synchronization methods and resource management in RTOS environments."
                }
            ]
            },
            {
            "title": "Embedded Systems Interview Questions",
            "type": "Practice",
            "duration": 60,
            "content": [
                {
                "concept": "Conceptual Questions",
                "details": "Practice answering conceptual questions on embedded systems design and development."
                },
                {
                "concept": "Problem-Solving Scenarios",
                "details": "Solving practice problems to prepare for technical questions in interviews."
                }
            ]
            }
        ]
        },
        {
        "date": "2023-11-20",
        "topics": [
            {
            "title": "Embedded Systems Design Methodologies",
            "type": "Learning",
            "duration": 90,
            "content": [
                {
                "concept": "Design Approaches",
                "details": "Reviewing top-down, bottom-up, and hardware-software co-design methodologies."
                },
                {
                "concept": "Design for Testability and Reliability",
                "details": "Understanding techniques to design embedded systems for testability and reliability."
                }
            ]
            },
            {
            "title": "Emerging Trends",
            "type": "Learning",
            "duration": 120,
            "content": [
                {
                "concept": "IoT in Embedded Systems",
                "details": "Exploring the integration of IoT technologies in embedded systems development."
                },
                {
                "concept": "AI/ML in Embedded Systems",
                "details": "Understanding the role of AI/ML algorithms in enhancing embedded systems functionalities."
                },
                {
                "concept": "Edge Computing",
                "details": "Exploring edge computing and its relevance in embedded systems architecture."
                }
            ]
            },
            {
            "title": "Project Explanations",
            "type": "Practice",
            "duration": 90,
            "content": [
                {
                "concept": "Project Explanation Preparation",
                "details": "Prepare clear and concise explanations of previous embedded systems projects."
                }
            ]
            },
            {
            "title": "Company Products and Technologies",
            "type": "Learning",
            "duration": 120,
            "content": [
                {
                "concept": "Aircraft Equipment",
                "details": "Understanding the company's aircraft equipment, its functionalities, and technologies used."
                },
                {
                "concept": "Software Technologies",
                "details": "Exploring software technologies employed in the development of aircraft equipment."
                }
            ]
            }
        ]
        },
        {
        "date": "2023-11-21",
        "topics": [
            {
            "title": "Key Embedded Systems Concepts",
            "type": "Review",
            "duration": 90,
            "content": [
                {
                "concept": "Consolidation of Core Concepts",
                "details": "Reviewing essential embedded systems concepts and terminology for a final revision."
                }
            ]
            },
            {
            "title": "Behavioral Interview Questions",
            "type": "Practice",
            "duration": 120,
            "content": [
                {
                "concept": "Teamwork and Problem-Solving",
                "details": "Practice answering questions related to teamwork, problem-solving, and leadership."
                },
                {
                "concept": "Motivation and Career Goals",
                "details": "Prepare responses to questions about career aspirations, motivations, and goals."
                },
                {
                "concept": "Company Interest",
                "details": "Research and prepare for questions about the company, its culture, and values."
                }
            ]
            },
            {
            "title": "Interview Readiness",
            "type": "Preparation",
            "duration": 90,
            "content": [
                {
                "concept": "Interview Preparation",
                "details": "Prepare for the interview by reviewing the job description and company information."
                }
            ]
            }
        ]
        }
    ]


    for study_plan in study_plan_data:
        new_study_plan = StudyPlan.objects.create(date=study_plan['date'])
        print(study_plan)
        # for topic in study_plan['topics']:
        #     new_topic = Topic.objects.create(title=topic['title'], type=topic['type'], duration=topic['duration'])
        #     new_topic.save()
        #     new_study_plan.topics.add(new_topic)
        #     for content in topic['content']:
        #         new_content = Content.objects.create(topic=new_topic, concept=content['concept'], details=content['details'])
        #         new_content.save()