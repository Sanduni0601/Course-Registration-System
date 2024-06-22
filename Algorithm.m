% Step 1: Initialize the System
max_courses = 5; % Maximum number of courses a student can register for
student_courses = {}; % List to hold the student's registered courses
available_courses = {'Math101', 'CS102', 'Hist201', 'Phys301', 'Chem401'}; % List of courses
course_capacities = [30, 25, 20, 15, 10]; % Capacities of each course
prerequisites = {'', 'Math101', '', 'CS102', 'Phys301'}; % Prerequisites for each course
current_enrollments = [28, 25, 18, 12, 10]; % Current enrollments for each course

% Step 2: Get Student Input
desired_courses = {'Math101', 'CS102', 'Phys301'}; % Example input

% Step 3: Check Registration Limits
if length(student_courses) + length(desired_courses) > max_courses
    disp('Exceeded Limit');
    return;
end

% Step 4: Iterate Through Desired Courses
for i = 1:length(desired_courses)
    course = desired_courses{i};
    
    % Find the index of the course
    course_index = find(strcmp(available_courses, course));
    
    % Check prerequisites
    if ~isempty(prerequisites{course_index})
        prereq = prerequisites{course_index};
        if ~ismember(prereq, student_courses)
            disp(['Missing Prerequisite for ', course]);
            continue;
        end
    end
    
    % Check course capacity
    if current_enrollments(course_index) >= course_capacities(course_index)
        disp(['Course Full: ', course]);
        continue;
    end
    
    % Register student
    student_courses{end+1} = course;
    current_enrollments(course_index) = current_enrollments(course_index) + 1;
    disp(['Registered for ', course]);
end

% Step 5: Confirm Registration
disp('Registration Process Completed Successfully');
disp('Registered Courses:');
disp(student_courses);