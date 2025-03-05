import { InternProfileData } from "@/definitions";


export async function getAllAccount() {
  const response = await fetch("http://localhost:5152/api/Account");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}



export async function postAccount() {}

export async function getAccountById(accountID: number | null) {
  const response = await fetch(
    `http://localhost:5152/api/Account/${accountID}`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function getAllAccountType() {
  const response = await fetch("http://localhost:5152/api/AccountType");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function getAccountTypeById(typeId: string) {
  const response = await fetch(
    `http://localhost:5152/api/AccountType/${typeId}`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function getAccountTypeIdByTypeName(typeName: string) {
  const response = await getAllAccountType();

  const accountType = response.$values.find(
    (item) => item.typeName === typeName
  );
  if (accountType) {
    return accountType.id;
  } else {
    return null; // Or handle the case where the typeName is not found
  }
}

export async function getAllRecruiterProfile() {
  const response = await fetch("http://localhost:5152/api/Recruit");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function postRecruitProfile(
  firstName: string,
  lastName: string,
  jobPosition: string,
  companyName: string,
  field: string,
  workAddress: string,
  phoneNumber: string,
  currentUserId: number | null
) {
  // POST create profile
  const response = await fetch("http://localhost:5152/api/Recruit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      jobPosition,
      companyName,
      field,
      workAddress,
      phoneNumber,
      currentUserId,
    }),
  });

  return response;
}

export async function putRecruitProfile(
  firstName: string,
  lastName: string,
  jobPosition: string,
  companyName: string,
  field: string,
  workAddress: string,
  phoneNumber: string,
  currentUserId: number | null
) {
  // POST create profile
  const response = await fetch(`http://localhost:5152/api/Recruit/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      jobPosition,
      companyName,
      field,
      workAddress,
      phoneNumber,
      currentUserId,
    }),
  });

  return response;
}

export async function getRecruiterProfileStatusById(id: number | null) {
  const response = await fetch(`http://localhost:5152/api/Recruit/${id}`);

  if (response.status === 404) {
    return false; // profile is not set up
  }
  if (response.status === 200) {
    return true; // profile is set up
  }
}

export async function getRecruiterProfileById(id: string | null) {
  const response = await fetch(`http://localhost:5152/api/Recruit/${id}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function getRecruiterProfileByAccountId(accountId: number) {
  try {
    const recruiterProfilesData = await getAllRecruiterProfile();
    const recruiterProfiles = recruiterProfilesData.$values;

    if (!recruiterProfiles) {
      return null; // Or throw an error, depending on your needs
    }

    const recruiterProfile = recruiterProfiles.find(
      (profile: { accountId: number }) => profile.accountId === accountId
    );

    return recruiterProfile || null; // Return null if not found
  } catch (error) {
    console.error("Error fetching recruiter profile:", error);
    return null; // Or throw an error, depending on your needs
  }
}

export async function getInternProfileStatusById(accountId: number | null) {
  const response = await fetch(
    `http://localhost:5152/api/Intern/account/${accountId}`
  );

  if (response.status === 404) {
    return false; // profile is not set up
  }
  if (response.status === 200) {
    return true; // profile is set up
  }
}

export async function postInternProfile(internProfile: InternProfileData) {
  // POST create profile
  const response = await fetch("http://localhost:5152/api/Intern", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(internProfile),
  });

  return response;
}

export async function getInternProfileById(accountIxd: number | null) {
  const response = await fetch(
    `http://localhost:5152/api/Intern/account/${accountId}`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function getAllFields() {
  const response = await fetch("http://localhost:5152/api/Field");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();

  return data; // Access the $values array directly
}
